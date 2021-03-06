// *** jQuery selectors

$("div:has(b)") // every div element that has a b element
$("p:has(b)") // every p element that has a b element
$("p:contains('koko')") //every p element that contains the word koko

$("body div:nth-child(3)") // this is the

$("li:empty") // every li element that is empty

//basic syntax is :
$("selector").action();
//Examples :
$(this).hide(); //hides the current Element
$("p").hide(); // hides all <p> elements.
$(".test").hide(); // hides all elements with calss ="test"
$("#test").hide(); // hides all Elements with id = "test"


// the important thing is that the JQuery code must be executed after the page is fully Loaded and therefor we use the ready function

$(document).ready(function() {
    // all JQuery Code goes here
});

//1 Events
//1.1 syntax
$("p").click(function() {
    // action goes here
});

//1.2 common events
// * mouse events : click, dblclick, mouseenter, mouseleave
// * Keyboard Events: keypress, keydown, keyup
// * Form Events: submit, change, focus, blur
// * Document Events: load, resize, scroll, unload

//Example:
$("p").dblclick(function() {
    $(this).hide();
});

//1.3 The on() Method :
//The on() method attaches one or more event handlers for the selected elements.
//Examples:
// only one event
$("p").on("click", function() {
        $(this).hide();
    })
    // multiple Events
$("div").on({
            mouseenter: function() {
                $(this).css("background-color", "red");
            },

            mouseleave: function() {
                $(this).css("background-color", "lightblue")
            },

            click: function() {
                $(this).hide();
            },
        }

        // 2 Effects
        //2.1 common Efects: Hide, Show, Toggle, Slide, Fade, and Animate. WOW!

        //2.2 syntax
        //2.2.1 hide(), show() and toggle()
        $(selector).effect(speed, callback) // speed parameter is optional and can take "fasr" , "slow" or milliseconds
        //Example:
        $("p").hide("slow"); $("p").show(1000); $().toggle("fast"); // toggles between show() and hide()

        //2.2.2 Fading    fadeIn(), fadeOut(), fadeToggle() and fadeTo()
        $(selector).effect(speed, callback); // speed parameter same as hide and show ....
        //Example:
        $("button").click(function() {
            $("#div").fadeIn();
            $("#div").fadeOut(slow);
            $("#div").fadeToggle(1500); // toggles between fadeIn() and fadeOut()
            $("#div").fadeTo(0.5); // the fadeTo() method allows the fading to a given Opacity etween 0 and 1
        });

        //2.2.3 Sliding     slideDown(), slideUp() and slideToggle()
        $(selector).effect(speed, callback); // speed parameter as previously mentioned
        //Example:
        $("button").click(function() {
            $("div").slideUp(slow);
            $("#idb").slideDown();
            $(".klas").slideToggle(1000);
        });

        //2.2.4 Animation animate()
        $(selector).effect({
            params
        }, speed, callback); //the required {params} defines the CSS properties to be animated
        // speed parameter as preciously mentioned

        //Examples:
        //1.Example: basic Example
        $("button").click(function() {
            $("div").animate({
                left: '250px'
            });
        });
        //2.Exxample: Manipulate Mutiple Properties
        $("button").click(function() {
            $("div").animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
            });
        });
        //3.Example: Using Relative Values
        $("button").click(function() {
            $("div").animate({
                left: '250px',
                height: '+=150px',
                width: '+=150px'
            });
        });

        //4.Example: Using Predefined Values
        $("button").click(function() {
            $("div").animate({
                height: 'toggle'
            });
        });
        //5.Example: Uses Queue Functionality
        $("button").click(function() {
            var div = $("div");
            div.animate({
                height: '300px',
                opacity: '0.4'
            }, "slow");
            div.animate({
                width: '300px',
                opacity: '0.8'
            }, "slow");
            div.animate({
                height: '100px',
                opacity: '0.4'
            }, "slow");
            div.animate({
                width: '100px',
                opacity: '0.8'
            }, "slow");
        });

        //2.2.5 stop()
        // this method is supposed to stop the animation before it ends
        $(selector).stop(stopAll, goToEnd); // the parameter stopAll specifies whether also the animation Queue should be cleared or not , Default is false
        // The optional goToEnd parameter specifies whether or not to complete the current animation immediately. Default is false.

        // 3 Method Chaining
        $("div").css("color", "red").slideUp(2000).slideDown(6000);
        // OR
        $("div").css("color", "blue")
        .slideUp(20000)
        .slideDown(80000);

        // 4 JQuery HTML DOM Manipulation
        //4.1 Get Content: text(), html(), and val() :
        //Example:
        $("#btn1").click(function() {
            alert("Text: " + $("#test").text()); // .text() Returns the text Content of selected elements
        }); $("#btn1").dblclick(function() {
            alert("HTML: " + $("#test").html()); // .html() Returns the Content of selected elements (including html markup)
        }); $("#btn1").click(function() {
            alert("Value: " + $("#test").val()); // .val() Returns the value of form fields
        });

        //4.2 Get Attributes: attr() :
        //Example:
        $("button").click(function() {
            alert($("#w3s").attr("href"));
        });

        var klasse = $("#theOne").attr("class"); $(this).click(function() {
            $(this).attr("class", klasse);
            // or it can set many attributes at the same time as follows :
            $(this).attr({
                "href": "https://facebook.com",
                "class": klasse,
                "title": "facebook home page"
            });
        });

        //4.3 Set Content : text("parameter", callback), html("parameter", callback) and val("parameter", callback) :
        /*the CALLBACK function has two parameters: the index of the current element in the list of elements selected and the original (old) value, then I  return the String
          I wish to use as the new Value from the function*/
        //Example: of Setters
        $("#btn1").click(function() {
            $("#test1").text("Hello World!"); // .text("parameter") Sets the Text Content of selected Elements
        });

        $("#btn2").click(function() {
            $("#test2").html("<b>Hello World!</b>"); // .html("parameter") Sets the content of selected Elements (including html markup)
        });

        $("#btn3").click(function() {
            $("#test3").val("Dolly Duck"); // .val("parameter") Sets the value of Form fields
        });

        //Example: of callback function use:
        ///////////////////////

        //4.4 Add Elements: append(), prepend(), after(), before() :
        //Example:
        $("p").append("Some appended Text or HTML markUp"); // the append("some text") method inserts the content at the END of the selected Elements
        $("p").prepend("Some prepended text or HTML markUp"); // the prepend("some text") method inserts content at the BEGINING of th selected Elements
        $("p").after("Some prepended text or HTML markUp"); // the after() metnod adds the content after the element we chose not inside it
        $("p").before("Some prepended text or HTML markUp"); // the before() method is the opposite of after();

        // i can also add html markup its no problem
        // Example:
        $(document).ready(function() {
            $("#btn1").click(function() {
                $("p").prepend("<b>Prepended text</b>. ");
            });
            $("#btn2").click(function() {
                $("ol").prepend("<li>Prepended item</li>");
            });
        });

        // i can also add several new Elements with append() and prepend():
        //Example:
        function appendText() {
            var txt1 = "<p>Text.</p>"; // create Element with HTML
            var txt2 = $("<p></p>").text("Text.");
            var txt3 = document.createElement("p");
            txt3.innerHTML = "text."
            $("body").append(txt1, txt2, txt3);
        }

        //4.5 Remove and replace Elements: replaceWith() remove() nad empty() :
        //Example:
        $("#div1").remove(); //the remove() Method removes the selected Element anf its child elements
        // the remove() Mehtod accepts also a parameter which allows me to filter the elements to be removed
        $("p").remove(".test") // removes all p element that also have the .test class
        $("p").remove(".test, .demo, #koko"); // removes the p element that have the named classes and th ID koko


        $("#div2").empty(); // the empty() Methos removes the child elements of the selected element

        //4.6 JQuery CSS  classes
        .addClass("kaka koko") // adds one or more classes
        .removeClass("kaka koko") // removes one or more classes form the selected elements
        .toggleClass("kaka") // togles between adding or removing the mentioned class to the selected element
        .css("propertyname") // returns the value of the selected property
        $("p").css("background-color");

        .css("propertyname", "value") // sets the property to the value
        $("p").css("background-color", "red");

        .css({ // for multiple property setting
            "propertyname": "value1",
            "propertyname": "value2"
        });

        //5 JQuery AJAX
        // coming soon

        //6 JQuery Misc : the jQuery noConflict() Method

        // the noConflict Method releases the Hold on the $ shortcut identifier , so that other scripts can use it
        //because a lot of JS other frameworks also use the $ identifier and when i wanna use them both without the noConflict Method one of them is gonna stop working
        // I can still use J query , simpy by writing the full name istead of the $

        //Example:
        $.noConflict(); jQuery(document).ready(function() {
            jQuery("button").click(function() {
                jQuery("p").text("jQuery is still runnin!! ");
            });
        });

        // but i can choose my own shortcut instead of the $ bling as follows :
        var jq = $.noConflict(); jq(document).ready(function() {
            jq("button").click(function() {
                jq("p").text("JQuery is still working!");
            });
        });

        // see the jQuery MISC Reference. http://www.w3schools.com/jquery/jquery_ref_misc.asp







        /* Usefull Tricks */

        "sliding throw the page":
        $("theButtonToBeClicked").click(function() {
            $("html, body").animate({

                scrollTop: $("thePlaceYouWantToGoTo").offset().top

            }, 1000 /*the time lapse*/ );
        });



        // ******************************* jQuery UI *********************** //

        //make sure to include the jquery-ui library and its CSS stylesheets http://jquery-ui.com
        //1.widgets :: just handfull mentioned of many widgets
        /***********/
        "the options and methods mentions are just a few examples of many possibilitis vivit API for more " /*************/
        // 1.1 the Date Picker
        $("input").datepicker({
            property: value
        }); // this date picker method will give me a customized calender to choose Date
        this.Properties // the datePicker({Propertie: value}) Properties go in the curly brackets and it can take one or more seperated by a ',' comma
        // numberOfMonths, changeYear, changeMonth, weekHeader, showOtherMonths .... for more see the jquery UI API documentation http://api.jqueryui.com/ widgets.
        //Example:
        $("#pickdate").datepicker({
            numberOfMonths: 1, // how many months to display at the same time
            changeMonth: true, // a dropdown to choose the month
            changeYear: true, // a dropdown to choose year manually
            showWeek: true, // shows the week number
            weekHeader: "Week", // gives a header to the week
            showOtherMonths: true, // show days of last month depends on where the month starts and ends
            minDate: new Date(2000, 11, 25),  //
            maxDate: new Date(2001, 11, 25),//
            showButtonPanel: true,  // shows a pannel where we can add buttons and so on  ....
              closeText: "Close Calendar", //
              currentText: "Heute",
            yearSuffix: " BC"
        });

        //1.2 the toolTip
        $("randomelement").tooltip({
            property: value
        }); this.properties // same rules
        // content, track, show: {effect: "effectname", duration: 800}, hide: {effect: "effectname", duration: 800}....
        /* just a hint the show and hide options are for */
        Combining /*Effects*/
        //Example:
        $("img").tooltip({
            content: "Big Panda", // overrides the title attribute of the html
            track: true,    //
            show: {      //shows an effect  of the tooltip when appearing
                effect: "fadeIn",
                duration: 800
            },
            hide: { // shows an effect when disappearing
                effect: "fadeOut",
                duration: 800
            }
        });
        //1.3 the Accordion : accordion()
        $("randomelement").accordion({
            property: value
        }); // kind of verticall menu
        this.properties // same rules...
        //collapsible, event , animate ...
        //Example:
        $("randomelement").accordion({
            collapsible: true,  //
            event: "mouseover", //
            animate: 800, //
            active: 1,  // which panel of the accordion to be opened as default
            heightStyle: "content", // the space of box in which the content appear in
            icons: {      // change the icons of opened and closed accordion tabs
                header: "ui-icon-plus",
                activeHeader: "ui-icon-minus"
            },
        });
        //1.4 the Menu widget : menu()
        $("randomelement").menu() // very similar to the accordin but it needs a kinda special HTML markup
        this.properties // same rules
        //menus, icons, ....
        //Example:
        $("#verticalMenu").menu({
                menus: "div", // shows the submenu and the header of the option
                icons: {
                    submenu: "ui-icon-circle-triangle-e" //changes the icon of the little submenus
                },

                //1.5 the dialog : dialog()
                $("#box").dialog({
                    property: value
                }) // it creates a dialog box
                this.properties // same rules
                //modal, closeOnEscape, autoOpen , draggable, ...
                //Example:
                $("#box").dialog({
                    autoOpen: false, // whether the dialog box is opened by default or not when the page loads
                    draggable: false, // whether its movable by the user
                    resizable: false,   //
                    hide: "explode", //
                    show: "bounce", //
                    closeOnEscape: false,  // activating and deactivating the esc button for closing the box
                    modal: false    // shuts down other page Functionalities when the box opens
                });

                //1.6 Tabs Widget : tabs()
                $(".selector").tabs({
                    property: value
                }) // it creates a horizontal menu
                this.properties // same rules
                // active, disabled[index, index], event, heightStyle, ....
                //Example:
                $("#maincontainer").tabs({
                    collapsible: true,
                    active: 1,
                    heightStyle: "content",
                    event: "mouseover",
                    disabled: [1, 2]
                });






                // 2. the theme Roller is Awesome http://jqueryui.com/themeroller/

                // 3.
                ///
                //
                //
                //
                //
                //
                //
                //
                //
                //
                //
