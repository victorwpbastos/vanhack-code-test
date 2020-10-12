let container = document.querySelector('#app');

let events = [
    {
        id: 1,
        date: 'October 12, 2020',
        name: 'Awesome MeetUp Event',
        type: 'MeetUp',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/1.jpg' },
    {
        id: 2,
        date: 'October 14, 2020',
        name: 'Awesome Leap Event',
        type: 'Leap',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/2.jpg' },
    {
        id: 3,
        date: 'October 16, 2020',
        name: 'Awesome Recruiting Mission Event',
        type: 'Recruiting Mission',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/3.jpg' },
    {
        id: 4,
        date: 'October 18, 2020',
        name: 'Awesome VanHackathon Event',
        type: 'VanHackathon',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/4.jpg' },
    {
        id: 5,
        date: 'October 20, 2020',
        name: 'Awesome Premium-only Webinar Event',
        type: 'Premium-only Webinar',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/5.jpg' },
    {
        id: 6,
        date: 'October 22, 2020',
        name: 'Awesome Open Webinar Event',
        type: 'Open Webinar',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/6.jpg' },
    {
        id: 7,
        date: 'October 24, 2020',
        name: 'Fantastic MeetUp Event',
        type: 'MeetUp',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/7.jpg' },
    {
        id: 8,
        date: 'October 26, 2020',
        name: 'Fantastic Leap Event',
        type: 'Leap',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/8.jpg' },
    {
        id: 9,
        date: 'October 28, 2020',
        name: 'Fantastic Recruiting Mission Event',
        type: 'Recruiting Mission',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/9.jpg' },
    {
        id: 10,
        date: 'October 30, 2020',
        name: 'Fantastic VanHackathon Event',
        type: 'VanHackathon',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/10.jpg' },
    {
        id: 11,
        date: 'November 02, 2020',
        name: 'Fantastic Premium-only Webinar Event',
        type: 'Premium-only Webinar',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/11.jpg' },
    {
        id: 12,
        date: 'November 04, 2020',
        name: 'Fantastic Open Webinar Event',
        type: 'Open Webinar',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/12.jpg' },
    {
        id: 13,
        date: 'November 06, 2020',
        name: 'Special MeetUp Event',
        type: 'MeetUp',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/13.jpg' },
    {
        id: 14,
        date: 'November 08, 2020',
        name: 'Special Leap Event',
        type: 'Leap',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/14.jpg' },
    {
        id: 15,
        date: 'November 10, 2020',
        name: 'Special Recruiting Mission Event',
        type: 'Recruiting Mission',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/15.jpg' },
    {
        id: 16,
        date: 'November 12, 2020',
        name: 'Special VanHackathon Event',
        type: 'VanHackathon',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/16.jpg' },
    {
        id: 17,
        date: 'November 14, 2020',
        name: 'Special Premium-only Webinar Event',
        type: 'Premium-only Webinar',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/17.jpg' },
    {
        id: 18,
        date: 'November 16, 2020',
        name: 'Special Open Webinar Event',
        type: 'Open Webinar',
        cover: 'https://raw.githubusercontent.com/victorwpbastos/vanhack-code-test/main/images/18.jpg' },
];

function openEventDetails(eventId) {
    let event = events.find(event => event.id === eventId);

    Swal.fire({
        title: event.name,
        html: `
            <p>Date: ${event.date}</p>
            <p>Type: ${event.type}</p>
        `,
        showCancelButton: true,
        confirmButtonText: 'Apply Now!',
    }).then((result) => {
        if (result.isConfirmed) {
            applyEvent(eventId);
        }
    });
}

function applyEvent(eventId) {
    let event = events.find(event => event.id === eventId);

    if (event.type === 'Premium-only Webinar') {
        Swal.fire({
            title: 'Error!',
            text: 'Sorry. This event is for premium members only.',
            icon: 'error',
            showCancelButton: true,
            confirmButtonText: 'I want to know more about Premium Membership'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open('https://vanhack.com/premium');
            }
        });

        return;
    }

    Swal.fire({
        title: 'Do you want to apply to this event?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `No`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Applied!', '', 'success');
        }
    });
}

events.forEach(event => {
    const element = document.createElement('div');

    element.classList.add('event-container');

    element.innerHTML = `
        <div class="event-cover" style="position: relative; background-image: url('${event.cover}');background-repeat: no-repeat; background-position: center; background-size: cover;">
            <div style="display: ${event.type === 'Premium-only Webinar' ? 'flex' : 'none'}; align-items: center; justify-content: center; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.75)">
                <span class="fa fa-lock" style="font-size: 64px; color: goldenrod;"></span>
            </div>

            <div style="display: ${['Leap', 'Recruiting Mission', 'VanHackathon'].includes(event.type) ? 'none' : 'flex'}; align-items: center; justify-content: center; position: absolute; top: 10px; right: 10px; padding: 20px; border-radius: 6px; background: #ffffff">
                <span style="font-weight: bold; color: goldenrod">${event.type}</span>
            </div>

            <div style="display: ${['Leap', 'Recruiting Mission', 'VanHackathon'].includes(event.type) ? 'flex' : 'none'}; align-items: center; justify-content: center; position: absolute; top: 10px; right: 10px; padding: 20px; border-radius: 6px; background: goldenrod">
                <span class="fa fa-star" style="font-size: 16px; color: #ffffff; margin-right: 10px;"></span>
                <span style="font-weight: bold; color: #ffffff">${event.type}</span>
            </div>
        </div>
        <div class="event-body">
            <div class="event-title">
                ${event.name}
            </div>
            <div class="event-date">${event.date}</div>
        </div>
        <div class="event-footer">
            <div style="display: flex;">
                <button type="button" class="button details-button" style="margin-right: 10px;" onClick="openEventDetails(${event.id})">See Details</button>
                <button type="button" class="button apply-button" style="margin-left: 10px;" onClick="applyEvent(${event.id})">Apply Now!</button>
            </div>
            <div style="display: flex;">
                <a href="https://facebook.com/sharer/sharer.php?u=https://vanhack.com" target="_blank" class="button" style="margin-right: 5px;">
                    <span class="fa fa-facebook" style="font-size: 24px; color: lightseagreen;"></span>
                </a>
                <a href="https://twitter.com/share?url=https://vanhack.com&text=${event.name}" target="_blank" class="button" style="margin-left: 5px;">
                    <span class="fa fa-twitter" style="font-size: 24px; color: lightseagreen;"></span>
                </a>
            </div>
        </div>
    `;

    container.append(element);
});