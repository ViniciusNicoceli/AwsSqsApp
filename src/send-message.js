const AWS = require('aws-sdk')
AWS.config.update({
    region: 'us-east-2'
})
const sqs = new AWS.SQS();

(async () => {
    await sqs.sendMessage({
        MessageBody: JSON.stringify({
            conta_origem: {
                agencia: 0001,
                numero_conta: '123456-7',
            },
            conta_destino: {
                agencia: 0001,
                numero_conta: '765432-1'
            },
            valor: 1000,
            moeda: 'BRL'
        }),
        QueueUrl: 'https://sqs.us-east-2.amazonaws.com/378123586962/test'
    }).promise();
    console.log('mensagem enviada com sucesso!')
})();