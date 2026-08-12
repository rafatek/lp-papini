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
        
        // Enviando como Form Data para evitar bloqueio de CORS (preflight OPTIONS) em arquivos locais
        const formData = new URLSearchParams();
        formData.append("nome", leadData.nome);
        formData.append("telefone", leadData.telefone);
        formData.append("tipoPessoa", leadData.tipoPessoa);
        formData.append("valorPedido", leadData.valorPedido);

        await fetch(webhookUrl, {
            method: 'POST',
            body: formData
        });

        // Pequeno atraso para garantir que a requisição saia antes de redirecionar
        await new Promise(resolve => setTimeout(resolve, 500));

    } catch (error) {
        console.error("Erro ao enviar lead para o webhook:", error);
    }

    // Redirect Logic
    if (leadData.tipoPessoa === 'Pessoa Jurídica' && leadData.valorPedido === 'Acima de R$100') {
        window.location.href = 'obrigado.html';
    } else {
        window.location.href = 'recuperacao.html';
    }
}
