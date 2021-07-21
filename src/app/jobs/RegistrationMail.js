import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3,
        lifo: true
    },
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Lucas de Almeida Monteiro <lucasdealmeida.monteiro@gmail.com>',
            to: `${user.name} <${user.email}>`,
            subject: `Seja bem vindo, ${user.name}.`,
            html: `
                <p>Para acessar a plataforma, basta clicar no link abaixo, inserir seu <b>e-mail: ${user.email}</b> e <b>senha: ${user.password}</b></p>
                <p><a href="#">Clique aqui e acesse seu painel administrativo</a></p>`
        });
    }
}

