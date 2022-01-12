const course_schedule = [
    { date: 'Tuesday, August 23, 2022', plan: '' },
    { date: 'August 30, 2022', plan: '' },
    { date: 'September 6, 2022', plan: '' },
    { date: 'September 13, 2022', plan: '' },
    { date: 'September 20, 2022', plan: '' },
    { date: 'September 27, 2022', plan: '' },
    { date: 'October 4, 2022', plan: '' },
    { date: 'October 11, 2022 - NO CLASS', plan: '' },
    { date: 'October 18, 2022', plan: '' },
    { date: 'October 25, 2022', plan: '' },
    { date: 'November 1, 2022', plan: '' },
    { date: 'November 8, 2022', plan: '' },
    { date: 'November 15, 2022', plan: '' },
    { date: 'November 22, 2022', plan: '' },
    { date: 'November 29, 2022', plan: '' },
]

let schedule_string = ''

for (let schedule of course_schedule) {
    schedule_string = schedule_string.concat(`<h2>${schedule.date}</h2><p>${schedule.plan}</p>`)
}

const course_description = `The recent GameStop short squeeze, staggering market performance
since the COVID-19 pandemic, rising inflation, and the booming housing market have brought investing 
to the forefront of public attention. These factors all alter the balance of risk and reward that 
each individual considers when they invest their money with the larger question of 
<strong>how can investing help an individual achieve their goals — both financially and for the benefit of the world?</strong>
In How to Get Rich Slowly Through Investing, students willlearn the fundamentals of investing and apply them in a live stock market competition. The course 
contains no exams — instead, students complete a portfolio pitch strategy of their choice.`

let sections = [
    { heading: 'Get Rich Slowly With Investing', content: '', order: 1 },
    { heading: 'Contact Information', content: 'Instructor: Aidan Gerber<br>Office: ?<br>Email: gerber@rice.edu', order: 2 },
    { heading: 'Course Description', content: course_description, order: 3 },
    { heading: 'Course Objectives and Learning Outcomes', content: '', order: 4 },
    { heading: 'Required Texts and Materials', content: '', order: 5 },
    { heading: 'Exams and Papers', content: 'Instead of exams or papers, this class will contain a final project. Students will design and pitch a portfolio of equities based on strategies they learned in the class.', order: 6 },
    { heading: 'Grade Policies', content: '', order: 7 },
    { heading: 'Absence Policies', content: 'Attending this class is important. If you know you are going to be absent, let the instructor know and class content will be provided.', order: 8 },
    {
        heading: 'Rice Honor Code', content: `In this course, all students will be held to the standards of the Rice Honor Code, a code that you pledged to honor when you matriculated at this institution. If you are unfamiliar with the details of this code and how it is administered, you should consult the Honor System Handbook at <a href="http://honor.rice.edu/honor-system-handbook/">http://honor.rice.edu/honor-system-handbook/</a>. This handbook outlines the University's expectations for the integrity of your academic work, the procedures for resolving alleged violations of those expectations, and the rights and responsibilities of students and faculty members throughout the process.`, order: 9
    },
    { heading: 'Disability Resource Center', content: 'If you have a documented disability or other condition that may affect academic performance you should: 1) make sure this documentation is on file with the Disability Resource Center (Allen Center, Room 111 / adarice@rice.edu / x5841) to determine the accommodations you need; and 2) talk with me to discuss your accommodation needs.', order: 10 },
    { heading: 'Syllabus Change Policy', content: 'This syllabus is only a guide for the course and is subject to change with advanced notice.', order: 11 },
    { heading: 'Course Schedule', content: schedule_string, order: 11 },
]

for (let section of sections) {
    if (section.content.substring(0, 1) !== '<') {
        section.content = `<p>${section.content}</p>`
    }
}

export default sections