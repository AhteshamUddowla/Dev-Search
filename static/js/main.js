
  //GET SEARCH FROM AND PAGE LINKS
  let searchForm = document.getElementById('searchForm')
  let pageLinks = document.getElementsByClassName('page-link')

  //ENSURE SEARCH FORM EXISTS
  if(searchForm){
    for(let i=0; i<pageLinks.length; i++){
      pageLinks[i].addEventListener('click', function (e) {
        e.preventDefault()
        //console.log('Button Clicked')

        //GET THE DATA ATTRIBUTE
        let page = this.dataset.page
        //console.log("PAGE:", page)

        //ADD HIDDEN SEARCH INPUT TO FORM
        searchForm.innerHTML +=  `<input value=${page} name="page" hidden>`

        //SUBMIT FORM
        searchForm.submit()
      })
    }
  }


// Remove Project Tags
  let tags = document.getElementsByClassName('project-tag')

  for(let i=0; i<tags.length; i++){
      tags[i].addEventListener('click', (e)=> {
          let tagId = e.target.dataset.tag
          let projectID = e.target.dataset.project

          // console.log("TAG ID: ", tagId)
          // console.log("PROJECT ID: ", projectID)
      
          fetch('http://127.0.0.1:8000/api/remove-tag/', {
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify({'project':projectID, 'tag': tagId})
          })
          .then(response => response.json())
          .then(data => {
              e.target.remove()
          })
      })
  }