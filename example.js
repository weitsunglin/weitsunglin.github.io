document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮元素
    const button = document.getElementById('changeContentButton');
    
    // 添加点击事件监听器
    button.addEventListener('click', function() {
        // 获取要改变内容的段落元素
        const aboutParagraph = document.querySelector('#about p');
        const projectsParagraph = document.querySelector('#projects p');
        const contactParagraph = document.querySelector('#contact p');
        
        // 改变段落内容
        aboutParagraph.textContent = '这是一个用于 GitHub Pages 的示例网站。现在我们改变了内容。';
        projectsParagraph.textContent = '这是一些我的新项目：';
        contactParagraph.innerHTML = '你可以通过以下方式联系我：<a href="mailto:new-email@example.com">new-email@example.com</a>';
    });
});
