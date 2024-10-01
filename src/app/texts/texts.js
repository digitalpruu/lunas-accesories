const title = "Luna's Accessories";
const slogan = "Detalles únicos para cada momento especial";
const email = "lunasaccesories14@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3178180339";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "Luna's Accessories ofrece una variedad de productos de papelería, accesorios y detalles para todas las ocasiones, buscando siempre entregar algo único y especial.",
        description2: "Con un enfoque en crear experiencias memorables, nuestros productos están pensados para destacar en cualquier momento importante, personalizando cada detalle a tus gustos y necesidades.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Luna's Accessories",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/pn33RY28NMpJCPou/?mibextid=qi2Omg",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
