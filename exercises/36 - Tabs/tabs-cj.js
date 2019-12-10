//We are selecting all the tabs in the page 
const tabs = document.querySelector(".tabs");
//Here we are selecting just de buttons in the tabs, because, we just want to use the buttons inside our primary tab
const tabButtons = tabs.querySelectorAll('[role="tab"]');
//Here we are selecting the panels inside the variable tab with the role tabpanel 
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));
//this fucntion is the logic of the event in each button. 
function handleTabClick(event) {
    //When someone goes to click the tab we need to do 
    //Hide all the panels, because there is one actived for default behavier
    tabPanels.forEach(panel => { // function to add hidden atribute to all the panels. 
        panel.hidden = true; // when you selected one, the are going to hide.  
    });
    //mark all the tabs as unselected, because there actived in the html 
    tabButtons.forEach(tab => {
        //tab area selected false 
        tab.setAttribute("aria-selected", false);
    });
    //mark the clicked tab as selected 
    event.currentTarget.setAttribute("aria-selected", true);
    //find the associated tabpanel and show it, we need to select and show after hiden and unselected all.
    const { id } = event.currentTarget; // this is the reference to the current clicked button/ Id descontrution this id, is from the current target.
    /* first method 
    console.log('current target', event);
    const tabpanel = tabs.querySelector(`[aria-labelledby="${id}"]`); // We are selected the id of the clicked button.
    console.log(tabpanel);
    tabpanel.hidden = false; // We are puttin hidden false, to the panel who was clicked. 
    */
    // second method  find in the array of tabpanels 
    //we are looking in the tabPanels array (converted in array before) all the panels with the value equal to id.
    const tabPanel = tabPanels.find(panel => panel.getAttribute("aria-labelledby") === id);
    tabPanel.hidden = false;

};
//We are adding to all buttons the event click, with a loop because its more than one button.
tabButtons.forEach(button => button.addEventListener("click", handleTabClick));

