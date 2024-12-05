export default function LocalBusinessSchema() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Notary",
                    "name": "Escribanía Ringuelet",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Avenida Castex 3489 Oficina 6",
                        "addressLocality": "Canning",
                        "addressRegion": "Buenos Aires",
                        "postalCode": "1802",
                        "addressCountry": "AR"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": -34.864839,
                        "longitude": -58.503525
                    },
                    "url": "https://ringueletscatolini.com.ar",
                    "telephone": "+541142958794",
                    "openingHoursSpecification": [
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "10:00",
                            "closes": "16:00"
                        }
                    ],
                    "image": "https://ringueletscatolini.com.ar/logo.png",
                    "priceRange": "$$",
                    "description": "Servicios notariales de excelencia en Canning, Buenos Aires. Más de 50 años de experiencia.",
                    "areaServed": "Canning, Ezeiza, Buenos Aires"
                })
            }}
        />
    )
}