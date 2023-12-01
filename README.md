# Course-Registration


## Project features.

 Project feature are given below:
1. This web page is dynamic. It is designed to be responsive that Users can access and use the course registration system on different platforms like desktops, tablets, and smartphones. Users can click the select button on a course card to choose the courses they want to enroll in. 

2. Display a list of available courses in a clear and organized format. Each card shows the course title, description, price, and credit hours.

3. I've included a notification that displays user-friendly messages (toasts) when specific actions occur. For example, if a user tries to add a course they already have selected, they will get a notification.


## I have managed the state in my project:

useState hook:
- Using the useState hook, I declared various state variables, including getData, getCreditHour, totalCost, totalCredit, and totalRemainingHour. These variables hold various forms of data that my component must address.

Fetching Data with useEffect:
- I've used the useEffect hook to fetch data from the data.json file when the component organize.

 handleAddCredit Selection Button:
 - The handleAddCredit function is called when a user clicks the "Select" button for a course.
 - It  checks whether the selected course already exists in getCreditHour to avoid duplicates.
 - If the course is not already selected and the total credit hours don't exceed 20, the course is added to getCreditHour and the total cost, total credit hours, and remaining credit hours are updated.
 - I've used the'react-toastify' library to display toast notifications.
