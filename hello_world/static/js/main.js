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
    { id: 1, content: "Self-Taught Programming", start: "2019-11", end: "2020-08" },
    { id: 2, content: "Nexus Organizer Development", start: "2019-12", end: "2020-07" },
    { id: 3, content: "Full Stack Web Developer @ Blayzer", start: "2020-08", end: "2021-10" },
    { id: 4, content: "Mod Pizza", start: "2021-11" },

    // { id: 3, content: "item 3", start: "2021-04-18" },
    // { id: 4, content: "item 4", start: "2021-04-16", end: "2021-04-19" },
    // { id: 5, content: "item 5", start: "2021-04-25" },
    // { id: 6, content: "item 6", start: "2021-04-27", type: "point" },
]);

// Configuration for the Timeline
var options = {
    horizontalScroll: true,
    zoomable: false,
};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
// END TIMELINE