document.addEventListener("DOMContentLoaded", function () {
    // Kích hoạt Bootstrap popover
    const popoverContainer = document.getElementById("popoverContainer");

    const btnDiv = document.createElement('div')
    const btnDiv1 = document.createElement('div')
    const btnDiv2 = document.createElement('div')

    const btnReactExtension = document.createElement('button');
    btnReactExtension.classList.add('btn', 'btn-custom', 'btn-success', 'today-test')
    const btnPopover = `<button  data-toggle="popover1" class="btn-sm btn-danger today-test" >@btnChildxx</button>`
    const btnPopover1 = `<button  data-toggle="popover1" class="btn-sm btn-danger today-test" >@btnChildxx</button>`
    const btnPopover2 = `<button  data-toggle="popover5" class="btn-sm btn-warning today-test" >@btnChild1</button>`
    const btnPopover3 = `<b  class="btn-sm btn-success b-child" >@child</b>`

    btnReactExtension.innerHTML = `<b  class="btn-sm btn-success b-child" >@child</b>`
    btnReactExtension.innerHTML = `<!--<a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a>-->`

    btnDiv.innerHTML = btnPopover
    btnDiv1.innerHTML = btnPopover1
    btnDiv2.innerHTML = btnPopover2
    popoverContainer.appendChild(btnDiv)
    popoverContainer.appendChild(btnDiv1)
    popoverContainer.appendChild(btnDiv2)
    popoverContainer.appendChild(btnReactExtension)

    // const popoverTrigger = popoverContainer.querySelectorAll("[data-toggle='popover1']");
    const popoverTrigger = popoverContainer.querySelectorAll(".today-test");

   // [...popoverTrigger].map(popoverTriggerEl => {
   //      new bootstrap.Popover(popoverTriggerEl, {
   //          content: btnPopover3,
   //          container: 'body',
   //          html: true
   //      })
   //
   //  })

    // const popover = new bootstrap.Popover(popoverTrigger,{
    //     content:btnPopover,
    //     html:true
    // });
    // popoverTrigger.popover()

    // Lắng nghe sự kiện click vào button
    // const reactionButton = document.getElementById("reaction");
    // reactionButton.addEventListener("click", function () {
    //     // Kích hoạt popover
    //     // popover.show();
    // });

});
$(function () {
    $('.today-test').popover({
        content: '123',
        html: true,
        container: 'body',
        tabindex:0,
        delay:{hide:500},
        trigger: 'focus',
    });
})
$(function () {
    $('[data-toggle="popover1"]').on('shown.bs.popover', () => {
        // const childEl = document.querySelector('.b-child')
        const childEl = document.querySelectorAll('.b-child')
        console.log(childEl)
        childEl.forEach(item =>{
            console.log(item)
            item.addEventListener('click',()=>{
                    alert('122xxx')
                })
        })
        console.log(childEl)
        // childEl.addEventListener('click',()=>{
        //     alert('122xxx')
        // })

    })
})