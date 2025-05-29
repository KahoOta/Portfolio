document.getElementById('add-button').addEventListener('click', () => {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();

  if (text !== '') {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
  }
});
