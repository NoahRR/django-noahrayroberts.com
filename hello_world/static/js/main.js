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
var timeline_data_object = [
    {
        id: 1,
        content: "High School Graduation",
        start: "2019-05",
        tooltip: "La Crescenta High School. 3.79/4 GPA",
    },
    {
        id: 2,
        content: "1 year @ Saint Louis University",
        start: "2019-06",
        tooltip: "3.94/4 GPA. Completing general education requirements. Thinking about CS & Philosophy.",
    },
    {
        id: 3,
        content: "CS50x",
        start: "2020-01",
        tooltip: "Harvard's Introduction to Computer Science. Completion with distinction in completed projects.",
    },
    {
        id: 4,
        content: "DoorDash Driver",
        start: "2020-02",
        tooltip: "Customer service, problem solving, and time management.",
    },
    {
        id: 5,
        content: "Mindstash.io launched",
        start: "2020-09",
        tooltip: "A web app that helps you retain information, like a second brain. Built in Django.",
    },
    {
        id: 6,
        content: "Full-Stack Web Developer @ Blayzer Digital",
        start: "2020-11",
        tooltip: "Worked, full-time, for a small digital marketing agency. Built & maintained websites, largely, in Laravel, Wordpress, and Opencart. Got experience with project managment, client communication, working with a team, working with servers, DNS, data manipulation, backend, and frontend development.",
    },
    {
        id: 7,
        content: "Squad Member @ Mod Pizza",
        start: "2021-11",
        tooltip: "Customer service & skill proficiency.",
    },
    {
        id: 8,
        content: "Shift Lead @ Mod Pizza",
        start: "2022-01",
        tooltip: "Leadership, customer service, admin, and shift management.",
    },
    {
        id: 9,
        content: "(unofficial) General Manager @ Mod Pizza",
        start: "2022-10",
        tooltip: "Leadership, P&L, schedule building, labor management, COGS, training, and more.",
    },
];

var timeline_data_for_timeline = new vis.DataSet(timeline_data_object);

// Configuration for the Timeline
var options = {
    horizontalScroll: false,
    zoomable: false,
    selectable: true,
    showMinorLabels: false,
};

// Create a Timeline
var timeline = new vis.Timeline(container, timeline_data_for_timeline, options);

timeline.on('select', function (properties) {
    console.log(timeline_data_object[properties.items[0] - 1]['tooltip']);
});
// END TIMELINE