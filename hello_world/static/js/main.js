// hover styling for main nav items
// document.querySelectorAll('.nav_menu_item').forEach(item => {
//     item.addEventListener('mouseover', function() {
//         console.log(item.querySelector('.nav_menu_item_text').outerText);
//         item.classList.add("nav_menu_item_hover");
//         item.querySelector('.nav_menu_item_text').classList.add("nav_menu_item_text_hover");
//     });    
// });
// document.querySelectorAll('.nav_menu_item').forEach(item => {
//     item.addEventListener('mouseout', function() {
//         item.classList.remove("nav_menu_item_hover");
//         item.querySelector('.nav_menu_item_text').classList.remove("nav_menu_item_text_hover");
//     });    
// });

// TYPEDJS
var typed = new Typed("#kt_typedjs_top_content", {
    strings: [
        "<span style='color: black;'>^800 I'm Noah^600 </span><br><span class='position-relative d-inline-block text-primary' style='line-height: 38px;'>this is my story<span class='position-absolute opacity-15 bottom-0 start-0 border-4 border-primary border-bottom w-100'></span></span>",
    ],
    typeSpeed: 60,
    backSpeed: 30
});


// Select element
const target = document.getElementById('kt_clipboard_3');

// Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
clipboard = new ClipboardJS(target);

// Success action handler
clipboard.on('success', function (e) {
    const currentLabel = target.innerHTML;

    // Exit label update when already in progress
    if (target.innerHTML === 'Copied!') {
        return;
    }

    // Update button label
    target.innerHTML = 'Copied!';

    // Revert button label after 3 seconds
    setTimeout(function () {
        target.innerHTML = currentLabel;
    }, 3000)
});