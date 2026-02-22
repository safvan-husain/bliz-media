type GridWidth = 1 | 2 | 3 | 4;

export type PlannedProject<T> = T & {
  layoutClass: string;
};

const SPAN_CLASS_BY_WIDTH: Record<GridWidth, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
};

const HERO_PRIORITY_THRESHOLD = 85;
const HERO_PRIORITY_GAP = 15;

function getRowSizes(totalItems: number): number[] {
  const rowSizes: number[] = [];
  let remaining = totalItems;

  while (remaining > 0) {
    if (remaining === 1) {
      rowSizes.push(1);
      remaining -= 1;
      continue;
    }

    if (remaining === 2 || remaining === 4) {
      rowSizes.push(2);
      remaining -= 2;
      continue;
    }

    if (remaining === 5) {
      rowSizes.push(3);
      remaining -= 3;
      continue;
    }

    rowSizes.push(3);
    remaining -= 3;
  }

  return rowSizes;
}

function getHighestPriorityIndex(priorities: number[]): number {
  let highestIndex = 0;

  for (let index = 1; index < priorities.length; index += 1) {
    if (priorities[index] > priorities[highestIndex]) {
      highestIndex = index;
    }
  }

  return highestIndex;
}

function planRowWidths(priorities: number[]): GridWidth[] {
  const rowLength = priorities.length;

  if (rowLength === 1) {
    return [4];
  }

  if (rowLength === 2) {
    const leadIndex = getHighestPriorityIndex(priorities);
    const followerIndex = leadIndex === 0 ? 1 : 0;
    const leadPriority = priorities[leadIndex];
    const followerPriority = priorities[followerIndex];
    const hasStrongLead =
      leadPriority >= HERO_PRIORITY_THRESHOLD &&
      leadPriority - followerPriority >= HERO_PRIORITY_GAP;

    const widths: GridWidth[] = [2, 2];

    if (hasStrongLead) {
      widths[leadIndex] = 3;
      widths[followerIndex] = 1;
    }

    return widths;
  }

  if (rowLength === 3) {
    const leadIndex = getHighestPriorityIndex(priorities);
    const widths: GridWidth[] = [1, 1, 1];
    widths[leadIndex] = 2;
    return widths;
  }

  return priorities.map(() => 1 as GridWidth);
}

export function planProjectLayout<T extends { priority: number }>(
  projects: T[],
): PlannedProject<T>[] {
  if (projects.length === 0) {
    return [];
  }

  const rowSizes = getRowSizes(projects.length);
  const plannedProjects: PlannedProject<T>[] = [];
  let offset = 0;

  for (const rowSize of rowSizes) {
    const rowProjects = projects.slice(offset, offset + rowSize);
    const rowPriorities = rowProjects.map((project) => project.priority);
    const rowWidths = planRowWidths(rowPriorities);

    rowProjects.forEach((project, index) => {
      plannedProjects.push({
        ...project,
        layoutClass: SPAN_CLASS_BY_WIDTH[rowWidths[index]],
      });
    });

    offset += rowSize;
  }

  return plannedProjects;
}
