let leadData = {
    nome: '',
    telefone: '',
    tipoPessoa: '',
    valorPedido: ''
};

function openLeadPopup() {
    const modal = document.getElementById('lead-qualificacao-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        showStep(1);
    }
}

function closeLeadPopup() {
    const modal = document.getElementById('lead-qualificacao-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.lead-step').forEach(step => {
        step.style.display = 'none';
    });
    // Show target step
    const targetStep = document.getElementById('lead-step-' + stepNumber);
    if (targetStep) {
        targetStep.style.display = 'block';
    }
}

function nextToStep2() {
    const nameInput = document.getElementById('lead-nome').value.trim();
    if (!nameInput) {
        alert("Por favor, preencha o seu nome para continuar.");
        return;
    }
    leadData.nome = nameInput;
    showStep(2);
}

function nextToStep3() {
    const phoneInput = document.getElementById('lead-telefone').value.trim();
    if (!phoneInput || phoneInput.length < 8) {
        alert("Por favor, preencha um telefone válido para continuar.");
        return;
    }
    leadData.telefone = phoneInput;
    showStep(3);
}

function selectTipoPessoa(tipo) {
    leadData.tipoPessoa = tipo;
    showStep(4);
}

async function selectValorPedidoAndSubmit(valor) {
    leadData.valorPedido = valor;
    
    // Show loading state
    showStep('loading');

    // Webhook POST
    try {
        const targetUrl = "https://backend.leylim.com.br/api/webhooks/f9b17591-ac54-4e9e-a012-a23d310b5bda";
        
        console.log("Iniciando disparo para o webhook...");

        // O backend da Leylim sofre de um erro interno (Crash 500) ao receber requisições preflight OPTIONS (CORS).
        // Portanto, a ÚNICA maneira de enviar do frontend é através de um 'simple request' que não dispara OPTIONS.
        // Convertendo os dados para formulário e utilizando mode: 'no-cors' para o navegador ignorar a falta de cabeçalhos de resposta.
        
        const params = new URLSearchParams();
        for (const key in leadData) {
            params.append(key, leadData[key]);
        }

        await fetch(targetUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: params // O navegador envia como application/x-www-form-urlencoded automaticamente
        });

        console.log("Requisição enviada (Opaque Request). Como usamos no-cors, o disparo foi feito sem travas.");

        // Atraso de segurança para garantir a entrega
        await new Promise(resolve => setTimeout(resolve, 1500));

    } catch (error) {
        console.error("Erro crítico na requisição Fetch:", error);
    }

    // Redirect Logic (Comentado temporariamente para testes de Webhook)
    /*
    if (leadData.tipoPessoa === 'Pessoa Jurídica' && leadData.valorPedido === 'Acima de R$100') {
        window.location.href = 'obrigado.html';
    } else {
        window.location.href = 'recuperacao.html';
    }
    */
    
    // Mostra mensagem de sucesso no lugar de redirecionar
    const loadingStep = document.getElementById('lead-step-loading');
    if(loadingStep) {
        loadingStep.innerHTML = '<i class="fa-solid fa-circle-check" style="font-size: 3rem; color: #25D366;"></i><h3 style="margin-top:1rem; font-family: var(--font-body); font-weight: normal;">Dados enviados! Verifique o Webhook.</h3>';
    }
}
