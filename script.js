
const targetDate =
new Date('January 24, 2027 12:10:00').getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const minutes=Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

const seconds=Math.floor(
(distance%(1000*60))
/
1000
);

document.getElementById("countdown").innerHTML=`
<div class="time-box">
<span>${days}</span>
<small>Days</small>
</div>

<div class="time-box">
<span>${hours}</span>
<small>Hours</small>
</div>

<div class="time-box">
<span>${minutes}</span>
<small>Minutes</small>
</div>

<div class="time-box">
<span>${seconds}</span>
<small>Seconds</small>
</div>
`;

},1000);
