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

    // Webhook POST para o n8n
    try {
        const targetUrl = "https://webhook.assessoriaturbodigital.com.br/webhook/9e35ed84-b80d-4b28-b8eb-a1d54147c051";
        
        console.log("Iniciando envio para o n8n...");

        await fetch(targetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData)
        });

        console.log("Requisição concluída!");

    } catch (error) {
        console.error("Erro na requisição Fetch:", error);
    }

    // Redirect Logic restaurada
    if (leadData.tipoPessoa === 'Pessoa Jurídica' && leadData.valorPedido === 'Acima de R$100') {
        window.location.href = 'obrigado.html';
    } else {
        window.location.href = 'recuperacao.html';
    }
}
