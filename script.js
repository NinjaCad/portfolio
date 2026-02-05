// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const subject=document.getElementById('subject').value || 'Message from portfolio';
    const message=document.getElementById('message').value;

    // fallback: open user's email client with prefilled content
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const mailto = `mailto:caedmonjulian@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
  }

  // simple fade up animation trigger
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.fade-up').forEach((el,i)=>{ el.style.animationDelay = (i*80)+'ms'; });
  });
