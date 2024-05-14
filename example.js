
/**
 * 當網頁的 DOM 內容加載完成後，執行以下程式碼。
 */

document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('changeContentButton');
    

    button.addEventListener('click', function() {

        const aboutParagraph = document.querySelector('#about p');
        const projectsParagraph = document.querySelector('#projects p');
        const contactParagraph = document.querySelector('#contact p');
        
        aboutParagraph.textContent = '範例內容';
        projectsParagraph.textContent = '新項目';
        contactParagraph.innerHTML = '聯繫方式: <a href="mailto:new-email@example.com">new-email@example.com</a>';
    });
});
