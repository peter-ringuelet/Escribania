import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { success: false, error: 'RESEND_API_KEY no está configurada' },
            { status: 500 }
        );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        console.log('Datos recibidos:', body);

        const { name, email, phone, service, message } = body;

        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'escribaniaringueletscatolini@gmail.com',
            subject: `Nueva consulta de ${name}`,
            html: `
                <h2>Nueva solicitud de consulta</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <p><strong>Servicio:</strong> ${service}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            `
        });

        console.log('Respuesta de Resend:', data);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error al enviar email:', error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Error desconocido'
            },
            { status: 500 }
        );
    }
}