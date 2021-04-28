$(document).ready(function(){

    //char class for
    $(".name, .student, .small-intro").lettering();

    //anime image overlay effect
    anime({
        targets: '.home .person-overlay',
        translateX: 1100,
        delay: 1000,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime({
        targets: '.home .person img',
        opacity: 1,
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine'
    })
    anime({
        targets: '.student span',
        opacity: 1,
        easing: 'easeInOutExpo',
        keyframes: [
            {translateY: -100, duration: 1500},
            {translateX: -100, duration: 1500}
        ],
        delay: anime.stagger(100, {start: 3000})
    })
    anime({
        targets: '.name span',
        opacity: 1,
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {start: 4500})
    })
    anime({
        targets: '.name .char2, .name .char4, .name .char6, .name .char8',
         keyframes: [
             {translateY: -100, duration: 1500},
             {translateX: 100, duration: 1500},
             {translateY: 50, duration: 1500}
         ],
         easing: 'easeInOutExpo',
         delay: 8000
    })
    anime({
        targets: '.name .char1, .name .char3, .name .char5, .name .char7',
         keyframes: [
             {translateY: 100, duration: 1500},
             {translateX: 100, duration: 1500},
             {translateY: 50, duration: 1500}
         ],
         easing: 'easeInOutExpo',
         delay: 8000
    })
    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
        delay: 9500
    })
    anime({
        targets: '.menu li',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {start: 10500})
    })
    anime({
        targets: '.small-intro span',
        opacity: 1,
        duration: 100,
        easing: 'easeInSine',
        delay: anime.stagger(50, {start: 11000})
    })
    anime({
        targets: '.home-text input',
        value: ['S', 'St', 'Stu', 'Stud', 'Stude', 'Studen', 'Student', 'Student #404'],
        round: 1,
        opacity: 1,
        duration: 2500,
        easing: 'easeInOutExpo',
        delay: anime.stagger(0, {start: 12500})
    })
});