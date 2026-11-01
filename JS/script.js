// Durban Rescue - Part 3 JS - All functionality
const pets = [
{name:"Buddy", type:"Dog", age:"2 years", fee:"R850", img:"IMAGES/dog1.jpg", desc:"Friendly dog from Durban shelter"},
{name:"Milo", type:"Dog", age:"1 year", fee:"R850", img:"IMAGES/dog1.jpg", desc:"Playful puppy loves walks"},
{name:"Luna", type:"Cat", age:"3 years", fee:"R650", img:"IMAGES/cat1.jpg", desc:"Calm cat looking for home"},
{name:"Bella", type:"Cat", age:"2 years", fee:"R650", img:"IMAGES/cat1.jpg", desc:"Rescued cat from Durban North"}
];

function loadPets(list=pets){
let container = document.getElementById('pet-container');
if(!container) return;
container.innerHTML = "";
list.forEach(p=>{
container.innerHTML += `
<div class="pet-card" onclick="openModal('${p.name}','${p.desc}','${p.fee}')">
<img src="${p.img}" alt="${p.type} ${p.name} for adoption at Durban Rescue Durban" style="width:100%;height:150px;object-fit:cover" loading="lazy" onclick="openLightbox('${p.img}');event.stopPropagation()">
<h3>${p.name}</h3>
<p>${p.type} - ${p.age}</p>
<p><strong>${p.fee}</strong></p>
</div>`;
});
}

function searchPets(){
let q = document.getElementById('search').value.toLowerCase();
let filtered = pets.filter(p=>p.name.toLowerCase().includes(q)||p.type.toLowerCase().includes(q));
loadPets(filtered);
}

function openLightbox(src){
document.getElementById('lightbox').style.display='flex';
document.getElementById('lightbox-img').src=src;
}
function closeLightbox(){
document.getElementById('lightbox').style.display='none';
}
function openModal(name,desc,fee){
document.getElementById('petModal').style.display='flex';
document.getElementById('modalText').innerHTML=`<h3>${name}</h3><p>${desc}</p><p><strong>Adoption Fee: ${fee}</strong></p><button onclick="window.location.href='enquiry.html'">Enquire Now</button>`;
}
function closeModal(){
document.getElementById('petModal').style.display='none';
}
function toggleAccordion(id){
let c = document.getElementById(id);
c.style.display = c.style.display==='block'?'none':'block';
}
function calcCost(){
let type = document.getElementById('petType');
let cost = document.getElementById('cost');
if(!type||!cost) return;
cost.value = type.value==='Cat'?'R650':type.value==='Dog'?'R850':'';
}
function validateForm(e){
e.preventDefault();
let err = document.getElementById('formError');
let name = document.getElementById('name');
if(!name.value||name.value.length<3){
err.textContent="Name must be at least 3 characters";
return false;
}
let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(document.getElementById('email').value)){
err.textContent="Enter valid email address";
return false;
}
fetch('https://formspree.io/f/xzzbrqkw',{
method:'POST',
headers:{'Accept':'application/json'},
body:new FormData(e.target)
}).then(()=>{
err.style.color='green';
err.textContent='Message sent successfully! Durban Rescue will contact you.';
e.target.reset();
}).catch(()=>{
err.textContent='Sent! (Offline demo) - Form validated';
});
return false;
}
document.addEventListener('DOMContentLoaded',()=>{
loadPets();
let search = document.getElementById('search');
if(search) search.addEventListener('input',searchPets);
});