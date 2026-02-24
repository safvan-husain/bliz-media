const WHATSAPP_NUMBER = "971568752317";

export function createServiceWhatsAppLink(serviceName: string) {
    const message = `Hi Bliz Media, I want to start my ${serviceName} project.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

