let equipamentos = [];

// Função para navegar entre as páginas
function navigate(page) {
    const menuItems = document.querySelectorAll('.navbar li');
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
    const activeItem = [...menuItems].find(item => item.textContent.toLowerCase() === page);
    if (activeItem) {
        activeItem.classList.add('active');
    }

    // Lógica para carregar conteúdo da página
    const content = document.querySelector('.form-container');

    if (page === 'home') {
        content.innerHTML = `<h1 class="app-title">Bem-vindo ao Sistema de Cadastro</h1><p>Selecione uma opção no menu para começar.</p>`;
    } else if (page === 'cadastro') {
        content.innerHTML = `
            <h1 class="app-title"><span class="symbol">🔧</span> Cadastro de Equipamentos</h1>
            <form id="cadastroForm">
                <div class="input-group">
                    <label for="nome">Nome do Equipamento:</label>
                    <input type="text" id="nome" required>
                </div>

                <div class="input-group">
                    <label for="codigo">Código do Equipamento:</label>
                    <input type="text" id="codigo" required>
                </div>

                <div class="input-group">
                    <label for="data">Data de Aquisição:</label>
                    <input type="date" id="data" required>
                </div>

                <div class="input-group">
                    <label for="status">Status:</label>
                    <select id="status" required>
                        <option value="">Selecione</option>
                        <option value="funcionando">Funcionando</option>
                        <option value="manutencao">Em Manutenção</option>
                        <option value="desativado">Desativado</option>
                    </select>
                </div>

                <div class="input-group">
                    <label for="observacoes">Observações:</label>
                    <textarea id="observacoes" rows="4"></textarea>
                </div>

                <button type="submit" class="btn-submit">Cadastrar</button>
                <div id="message"></div>
            </form>
        `;

        // Reatribui o evento de submit ao novo formulário
        document.getElementById('cadastroForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const nome = document.getElementById('nome').value;
            const codigo = document.getElementById('codigo').value;
            const data = document.getElementById('data').value;
            const status = document.getElementById('status').value;
            const observacoes = document.getElementById('observacoes').value;

            if (nome && codigo && data && status) {
                const equipamento = { nome, codigo, data, status, observacoes };
                equipamentos.push(equipamento);

                document.getElementById('message').textContent = 'Cadastro realizado com sucesso!';
                this.reset(); // Limpa os campos do formulário
            } else {
                document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
            }
        });

    } else if (page === 'relatorios') {
        content.innerHTML = `<h1 class="app-title">Relatórios</h1><p>Esta página ainda não está implementada.</p>`;
    } else if (page === 'sobre') {
        content.innerHTML = `<h1 class="app-title">Sobre</h1><p>Informações sobre o sistema.</p>`;
    }
}

// Carregar a página inicial ao abrir
navigate('home');
