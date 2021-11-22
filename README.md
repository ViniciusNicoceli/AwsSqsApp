receive-dlq-messages.js - Realiza o recebimento e exclusão das mensagens que passaram do tempo estipulado na AWS ou das mensagens que não estão em formato correto.

receive-messages.js - realiza a leitura da fila padrão selecionada da AWS e caso não esteja no formato correto irá alertar.

send-message.js - Envia uma mensagem já descrita no fonte de transferência bancaria.

send-poison-message.js - Envia uma mensagem incorreta para ser enviada para a lista de mensagens DLQ.
