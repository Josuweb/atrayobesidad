export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  metaDescription: string;
}

export const posts: Post[] = [
  {
    slug: "acompanamiento-familiar-tca",
    title: "Acompañamiento familiar en TCA y obesidad",
    excerpt: "Ideas prácticas para apoyar a un ser querido que atraviesa un Trastorno de la Conducta Alimentaria o la obesidad.",
    metaDescription:
      "Claves básicas para acompañar a familiares con TCA u obesidad desde la escucha, el respeto y la búsqueda de recursos especializados.",
    content: [
      "Escuchar sin juicios es el primer paso para acompañar a alguien que convive con un Trastorno de la Conducta Alimentaria o la obesidad. Validar las emociones y ofrecer un espacio seguro ayuda a que la persona se sienta comprendida.",
      "Las familias pueden apoyarse en asociaciones como ATRA y Obesidad Salamanca para resolver dudas, encontrar recursos y compartir experiencias con otras personas que viven situaciones similares.",
      "Recordar que el acompañamiento familiar no sustituye la atención sanitaria es clave: la detección temprana y la coordinación con profesionales especializados marcan la diferencia en el bienestar de la persona afectada.",
    ],
  },
  {
    slug: "prevencion-sensibilizacion-tca",
    title: "Prevención y sensibilización sobre los TCA",
    excerpt: "Por qué la información rigurosa y la educación comunitaria ayudan a reducir el estigma y a detectar señales de alerta.",
    metaDescription:
      "Prevención y sensibilización en TCA: cómo la educación y la empatía ayudan a las familias y a la comunidad a detectar señales tempranas.",
    content: [
      "Los programas de sensibilización permiten desmontar mitos y fomentar una relación saludable con la alimentación y la imagen corporal. Al compartir información accesible, las familias y centros educativos pueden identificar señales de alerta a tiempo.",
      "En ATRA y Obesidad Salamanca impulsamos actividades divulgativas y talleres para que la ciudadanía cuente con herramientas prácticas, siempre con un enfoque respetuoso y no dietético.",
      "La prevención es una tarea comunitaria: escuchar, acompañar y derivar a recursos especializados evita que las personas se sientan solas y mejora las posibilidades de recuperación.",
    ],
  },
  {
    slug: "recursos-comunitarios-obesidad",
    title: "Recursos comunitarios para el bienestar y la obesidad",
    excerpt: "Actividades y apoyos que facilitan el autocuidado, el movimiento amable y la conexión con otras personas.",
    metaDescription:
      "Recursos comunitarios en Salamanca para personas afectadas por obesidad: acompañamiento, movimiento consciente y espacios seguros.",
    content: [
      "El bienestar no se limita al peso: implica salud emocional, vínculos sociales y hábitos sostenibles. Las actividades comunitarias facilitan que las personas encuentren motivación y apoyo mutuo.",
      "Clases como Yoga Suave o Yoga Restaurativo ofrecen un espacio amable para reconectar con el cuerpo desde la calma y la respiración consciente, sin presiones estéticas.",
      "Las asociaciones permiten acceder a préstamos de libros, grupos de apoyo y orientación personalizada. Estas iniciativas complementan, pero no sustituyen, la atención médica especializada.",
    ],
  },
];
