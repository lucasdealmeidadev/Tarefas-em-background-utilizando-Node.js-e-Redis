import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

export default {
    async index(req, res) {
        await res.render('account/register');
    },
    async store(req, res) {
        const { name, email } = req.body

        if (name.length < 3) {
            return res.json({ staus: 'error', message: 'O campo nome deve conter no mínimo 3 caracteres.' });
        }

        if(!/\S+@\S+\.\S+/.test(email)){
            return res.json({ staus: 'error', message: 'E-mail inválido.' });
        }

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await Queue.add('RegistrationMail', { user });

        res.send({ staus: 'success', message: 'Usuário cadastrado com sucesso, em alguns instantes você recebera um link contendo todos os dados necessários para acessar a plataforma.'});
    }
}