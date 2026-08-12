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
        // Utilizamos um Proxy CORS para forçar a passagem do JSON sem ser bloqueado pelo servidor de destino
        const webhookUrl = "https://corsproxy.io/?" + encodeURIComponent(targetUrl);
        
        console.log("Iniciando disparo para o webhook...");
        console.log("Dados que serão enviados:", leadData);

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData)
        });

        console.log("Resposta bruta do servidor:", response);
        
        if (response.ok) {
            console.log("Webhook acionado com sucesso (Status 200).");
        } else {
            console.error("O webhook retornou um erro (Status " + response.status + ").");
        }

        // Atraso de segurança de 1 segundo
        await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
        console.error("Erro crítico na requisição Fetch:", error);
        alert("Ocorreu um erro no disparo: " + error.message);
        await new Promise(resolve => setTimeout(resolve, 1000));
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
