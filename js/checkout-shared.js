const baseLinks = {
    up1: "https://pay.finalizeseupagamento.store/69d7d433c21e94c85f346994", // Verifique
    up2: "https://pay.finalizeseupagamento.store/69d7d4d54a2524da6a777eb8", // Prossiga
    up3: "https://pay.finalizeseupagamento.store/69d7ed61c21e94c85f348559", // Cadastro
    up4: "https://pay.finalizeseupagamento.store/69d7edd0094b1616eaf48282", // Pendente
    up5: "https://pay.finalizeseupagamento.store/69d7ee0dc21e94c85f3485d1", // Ativar Conta
    up6: "https://pay.finalizeseupagamento.store/69d7ee50c21e94c85f3485ef", // Registro
    up7: "https://pay.finalizeseupagamento.store/69d7eead4a2524da6a7798de", // Acréscimo
    up8: "https://pay.finalizeseupagamento.store/69d7f6494a2524da6a77a0ed", // Documento
    up9: "https://pay.finalizeseupagamento.store/69d7eee2b285a8a15edb772d", // Aplicativo
    up10:"https://pay.finalizeseupagamento.store/69d7ef15c21e94c85f3486c6", // Abertura
    up11:"https://pay.finalizeseupagamento.store/69d7ef45e1285315d41a700a", // Consultoria
    up12:"https://pay.finalizeseupagamento.store/69d7ef76e1285315d41a7038"  // Administrativo
}

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);
