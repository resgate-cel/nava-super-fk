const baseLinks = {
    up1: "https://pay.finalizapagamento.space/c/a79cf6bf-f9dd-403e-abe4-4cbf293c9587", // Verifique
    up2: "https://pay.finalizapagamento.space/c/1f7979ce-7088-4d9f-aa70-b3df2d66f6ca", // Prossiga
    up3: "https://pay.finalizapagamento.space/c/7625648b-dcab-4cfb-b81e-2827a8a30765", // Cadastro
    up4: "https://pay.finalizapagamento.space/c/51809fc0-a81e-4a87-a638-3441ebee42b4", // Pendente
    up5: "https://pay.finalizapagamento.space/c/27616470-daba-4cb7-a1bb-608df9da45fa", // Ativar Conta
    up6: "https://pay.finalizapagamento.space/c/338deeee-4474-4f73-b9b8-42838a2f32f4", // Registro
    up7: "https://pay.finalizapagamento.space/c/4c9fa61c-22ea-4ded-9062-e08afdebed05", // Acréscimo
    up8: "https://pay.finalizapagamento.space/c/579a3a86-8209-4740-835a-e3a4baea24be", // Documento
    up9: "https://pay.finalizapagamento.space/c/7d00895f-4a80-47b4-b987-c07d5d45f815", // Aplicativo
    up10:"https://pay.finalizapagamento.space/c/e051e320-b34d-4c08-aad3-0963840ed5a6", // Abertura
    up11:"https://pay.finalizapagamento.space/c/d93d88cf-e979-40eb-9823-a5fac14c22bc", // Consultoria
    up12:"https://pay.finalizapagamento.space/c/c6811cfb-f46f-4cf9-a2bc-be7bf33fe28b"  // Administrativo
};

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
