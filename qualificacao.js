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
        const webhookUrl = "https://backend.leylim.com.br/api/webhooks/f9b17591-ac54-4e9e-a012-a23d310b5bda";
        
        // Enviando JSON usando no-cors (O navegador envia como text/plain, evadindo o bloqueio preflight, mas mantendo a string JSON intacta pro backend ler)
        const response = await fetch(webhookUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(leadData)
        });

        // Atraso de segurança de 1 segundo para garantir que a requisição finalize completamente
        await new Promise(resolve => setTimeout(resolve, 1000));

    } catch (error) {
        console.error("Erro crítico no envio para o webhook:", error);
        // Alerta na tela para que o usuário saiba se falhou no navegador dele
        alert("Ocorreu um erro ao enviar os dados. Detalhe: " + error.message);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Redirect Logic
    if (leadData.tipoPessoa === 'Pessoa Jurídica' && leadData.valorPedido === 'Acima de R$100') {
        window.location.href = 'obrigado.html';
    } else {
        window.location.href = 'recuperacao.html';
    }
}
