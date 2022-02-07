let course_schedule = [
    { date_string: 'August 23, 2022', plan: 'Introduce general course ideas, talk about ETFs and Indexes (S&P, Nasdaq, Dow, Nikkei, etc.). What is alpha? What sources are good and what guidelines are there for finding new ones. Assign students to look at a company they have personally used and think about why it would be a good investment' },
    { date_string: 'August 30, 2022', plan: 'Fundamental analysis day 1 (determine value using macro and microeconomic factors like interest rates and profit trends)' },
    { date_string: 'September 6, 2022', plan: 'Fundamental day 2' },
    { date_string: 'September 13, 2022', plan: 'Guest speaker' },
    { date_string: 'September 20, 2022', plan: 'Technical analysis Day 1 (determine value using price, volume, and chart patterns)' },
    { date_string: 'September 27, 2022', plan: 'Technical day 2' },
    { date_string: 'October 4, 2022', plan: 'Flex day' },
    { date_string: 'October 11, 2022', plan: 'NO CLASS: midterm recess' },
    { date_string: 'October 18, 2022', plan: 'Options day 1' },
    { date_string: 'October 25, 2022', plan: 'Options day 2' },
    { date_string: 'November 1, 2022', plan: 'Ethics of investing and introduce final project' },
    { date_string: 'November 8, 2022', plan: 'Portfolio building Day 1' },
    { date_string: 'November 15, 2022', plan: 'Portfolio building Day 2' },
    { date_string: 'November 22, 2022', plan: 'Non-stock investments (real estate, bonds, crypto, gold, commodities, gourd futures, etc.)' },
    { date_string: 'November 29, 2022', plan: 'Small group final presentations' },
]

for (let course of course_schedule) {
    course['date'] = new Date(course.date_string)
}

let schedule_string = ''

for (let schedule of course_schedule) {
    schedule_string = schedule_string.concat(`<h5>${schedule.date_string}</h5><p>${schedule.plan}</p>`)
}

const course_description = `The recent GameStop short squeeze, staggering market performance
since the COVID-19 pandemic, rising inflation, and the booming housing market have brought investing 
to the forefront of public attention. These factors alter the risk and reward balance that 
each individual considers when they invest their money with the larger question of 
<strong>how can investing tools and evidence help an individual achieve their financial goals.</strong>
In Evidence-based Investing, students will learn the fundamentals of investing and apply them in a live stock market competition. 
Together, we'll look at tough investing questions and formulate opinions with data and critical analysis.
With these skills, we'll analyze the claims made by prominent investors and perform original research — 
rather than blindly listening to Reddit posts with 8 upvotes.
The course contains no exams — instead, students complete a portfolio strategy pitch of their choice. By taking this
class you will learn the resources necessary to do your own research and think critically about investing opportunities.`

const course_objective = `By the end of this course, students will understand the process of choosing an investment, from
the basic steps of picking a company and analyzing it on to concepts like diversification and risk management.
`

const learning_objectives = `<ol><li>Evaluate stocks using fundamental and technical analysis.</li>
<li>Interpret whether a stock is worth purchasing and whether it fits within a given strategy.</li>
<li>Analyze investing claims from a variety of sources using evidence to determine accuracy.</li>
<li>Summarize investing concepts for others</li></ol>`

let sections = [
    { heading: 'Evidence-based Investing', content: '', order: 1 },
    { heading: 'Contact Information', content: 'Instructor: Aidan Gerber<br>URL: <a href="https://syllabus.pages.dev/">https://syllabus.pages.dev/</a><br>Email: gerber@rice.edu<br>Office Hours: By appointment', order: 2 },
    { heading: 'Course Description', content: course_description, order: 3 },
    { heading: 'Learning Objectives', content: learning_objectives, order: 3.1 },
    { heading: 'Assessments', content: ' In periods of 2 weeks each, students will learn fundamental and technical analysis, options, and portfolio review. Individuals or pairs will present a concept they learned in a discussion-based environment. At the end of the semester, students will pitch a group of stocks based on what they learned. Each week there will be a canvas discussion on where students make a post and comment about a stock market topic of their choice. Throughout the semester, there will be a paper trading game for extra credit.', order: 3.2 },
    { heading: 'Learning Outcomes', content: course_objective, order: 4 },
    { heading: 'Required Texts and Materials', content: 'This course has no required materials. We will be using tools like FRED, Yahoo Finance, Capital IQ, Koyfin, Quiverquant, etc.', order: 5 },
    { heading: 'Exams and Papers', content: 'Instead of exams or papers, this class will contain a final project. Students will design and pitch a portfolio of equities based on strategies they learned in the class.', order: 6 },
    { heading: 'Grade Policies', content: 'Participation: 35%<br>Topic Presentations: 35%<br>Final Project: 20%<br>Discussions: 10%<br>Satisfactory/unsatisfactory cutoff: 65%', order: 7 },
    { heading: 'Absence Policies', content: 'Attending this class is important. If you know you are going to be absent, let the instructor know and class content will be provided. The class also has two unexcused absences.', order: 8 },
    { heading: 'Rice Honor Code', content: `In this course, all students will be held to the standards of the Rice Honor Code, a code that you pledged to honor when you matriculated at this institution. If you are unfamiliar with the details of this code and how it is administered, you should consult the Honor System Handbook at <a href="http://honor.rice.edu/honor-system-handbook/">http://honor.rice.edu/honor-system-handbook/</a>. This handbook outlines the University's expectations for the integrity of your academic work, the procedures for resolving alleged violations of those expectations, and the rights and responsibilities of students and faculty members throughout the process.`, order: 9 },
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
export let schedule = course_schedule