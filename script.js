document.getElementById('articleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const articleList = document.getElementById('articleList');
    const li = document.createElement('li');
    li.textContent = `${title}: ${content}`;
    articleList.appendChild(li);

    // مسح المدخلات بعد الإضافة
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
});
