# Class-Room-App
ClassRoom App using React Native is a simple application designed to facilitate online learning and classroom management. These apps are commonly used in educational institutions, schools, colleges, and universities to enhance the teaching and learning experience.

Approach to create Classroom App:
The Classroom App is a simple application designed to facilitate online learning and classroom management. In this app, we created a beautiful UI for the classroom app.
In the classroom app, we added multiple features including a table button by which students can access the timetable section.
The Timetable screen shows the schedule for various courses, including the time and corresponding subject.
We also included a “Study Material” button to access a collection of study materials related to the courses.
Each study material entry includes a title and a link. Tap on a study material to open the link in a browser.
In both the Timetable and Study Material screens, there is a “Back to Home” button at the bottom. Tap it to return to the Home screen.
Features of a Classroom App:
Creation and organization of courses, subjects, or classes.
Recording and monitoring student attendance.
Displaying class schedules and timetables.
Allowing students to create and manage their profiles.
Steps to Create React Native Application:
Step 1: Create a react native application by using this command in the command prompt

React-native init ClassRoom App
Step 2: We will use some Icons in our app so, we will install dependency for icon.
npm i react-native-vector-icons
npm i react-native-fontawesome

The updated dependencies in package.json file will look like:

"dependencies": {
    "mobx": "4.1.0",
    "mobx-react": "5.0.0",
    "@expo/vector-icons": "^13.0.0",
    "react-native-elements": "0.18.5",
    "react-native-vector-icons/FontAwesome": "*",
    "react-native-vector-icons": "10.0.3"
}

Step to Run the Project:

Step 1: Depending on your operating system, type the following command

For android:
React-native run-android
For IOS:
React-native run-ios
