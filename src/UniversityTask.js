
let studentCount = 0;
let placementsDone = 0;
let uniPlacements = 0;
let studentA1 = [];
let universityName = "";
let placementsA2 = [];
let collegeName = "";
let studentA3 = [];
let placementsA4 = [];
fetch('https://api.npoint.io/a1fbf48c810e0aff7956')
    .then(resp => resp.json())
    .then(data => {
        data.universities.map((da, index) => {
            data.colleges.map((du, inde) => {
                if (da.un_id === du.un_id) {
                    data.collegeDepartments.map(dc => {
                        if (du.c_id === dc.c_id) {
                            studentCount = studentCount + dc.student_count;
                            placementsDone = placementsDone + dc.placements_done;
                            uniPlacements = uniPlacements + dc.placements_done;
                        }
                    })
                    const unique = [...new Set(data.collegeDepartments.map(un => un.department_name))];
                    // console.log(studentA3,'a3')
                    // switch(dc.department_name){
                    //     case 'ECE' : return{

                    //     }
                    // }
                    placementsA2.push(placementsDone)
                    placementsDone = 0;
                    if (placementsA2.indexOf(Math.max(...placementsA2)) === inde) {
                        collegeName = du.name
                    }
                    // let id = placementsA2.indexOf(Math.max(...placementsA2));
                    // console.log(data.colleges[id].name)
                }
            })
            studentA1.push(studentCount)
            studentCount = 0;
            if (studentA1.indexOf(Math.max(...studentA1)) === index) {
                universityName = da.name
            }
        })
        // console.log(collegeName)
        // console.log(universityName,'uni')
    })