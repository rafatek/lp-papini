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

    const targetUrl = "https://backend.leylim.com.br/api/webhooks/f9b17591-ac54-4e9e-a012-a23d310b5bda";
    console.log("Iniciando disparo modo raiz (Formulário Oculto) para o webhook...");

    // Cria um Iframe invisível (Isso impede que a página mude de tela quando o formulário for enviado)
    let iframe = document.getElementById('hidden-webhook-frame');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden-webhook-frame';
        iframe.name = 'hidden-webhook-frame';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    // Cria o formulário HTML raiz
    let form = document.createElement('form');
    form.action = targetUrl;
    form.method = 'POST';
    form.target = 'hidden-webhook-frame'; // Aponta o envio para o Iframe

    // Preenche o formulário com os dados do Lead
    for (const key in leadData) {
        let input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = leadData[key];
        form.appendChild(input);
    }

    // Adiciona na tela, clica em enviar, e remove da tela
    document.body.appendChild(form);
    form.submit();
    
    console.log("Formulário disparado com sucesso!");

    // Pequeno atraso para simular o carregamento antes de redirecionar o usuário
    setTimeout(() => {
        document.body.removeChild(form);
        
        // Redireciona com base nas regras (Descomentado para voltar ao funcionamento normal)
        if (leadData.tipoPessoa === 'Pessoa Jurídica' && leadData.valorPedido === 'Acima de R$100') {
            window.location.href = 'obrigado.html';
        } else {
            window.location.href = 'recuperacao.html';
        }
    }, 1500);
}
