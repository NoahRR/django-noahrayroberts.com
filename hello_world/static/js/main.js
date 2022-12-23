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

// TIMELINE
// DOM element where the Timeline will be attached
var container = document.getElementById("kt_docs_vistimeline_basic_career");

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
    { id: 1, content: "High School Graduation", start: "2019-05" },
    { id: 2, content: "1 year @ Saint Louis University", start: "2019-06" },
    { id: 3, content: "CS50x", start: "2020-01" },
    { id: 4, content: "DoorDash Driver", start: "2020-02" },
    { id: 5, content: "Mindstash.io launched", start: "2020-09" },
    { id: 6, content: "Full-Stack Web Developer @ Blayzer Digital", start: "2020-11" },
    { id: 7, content: "Squad Member @ Mod Pizza", start: "2021-11" },
    { id: 8, content: "Shift Lead @ Mod Pizza", start: "2022-01" },
    { id: 9, content: "(unofficial) General Manager @ Mod Pizza", start: "2022-10" },
]);

// Configuration for the Timeline
var options = {
    horizontalScroll: false,
    zoomable: false,
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
// END TIMELINE