
let studentCount = 0;
let placementsDone = 0;
let studentA1 = [];
let placementsA2 = [];
fetch('https://api.npoint.io/a1fbf48c810e0aff7956')
.then(resp => resp.json())
.then(data => {
    data.universities.map(da => {
        data.colleges.map(du => {
                if(da.un_id === du.un_id){
                    data.collegeDepartments.map(dc => {
                        if(du.c_id === dc.c_id){
                            studentCount = studentCount+ dc.student_count;
                            placementsDone = placementsDone+dc.placements_done;
                        }   
                    })
                }
                console.log(placementsA2.push(placementsDone))
            })
            studentA1.push(studentCount)
            console.log(studentA1)
        })
})