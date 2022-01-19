new Vue({
   el: "#app",
   data: {
      monsterHeal: 100,
      userHeal: 100,
      show: false,
      monsterPoint: 0,
      userPoint: 0,
      divStatus: false,
      attackPoint: 1,
      heartPoint: 1,
      attackLimit: 3,
      heartLimit: 3,
      attackActive: true,
      heartActive: true,
      hucumActive: true,
      terkEtActive: true
   },

   methods: {
      attack() {
         let point = Math.round(Math.random() * 10);
         this.monsterHeal -= point;

         let point2 = Math.round(Math.random() * 15);
         this.userHeal -= point2;
      },
      strongAttack() {
         let attackPoint = this.attackPoint++;
         if (attackPoint >= 0 && attackPoint <= 3) {
            let point = Math.round(Math.random() * 25);
            this.monsterHeal -= point;


            let point2 = Math.round(Math.random() * 15);
            this.userHeal -= point2;
            this.attackLimit--;
         } else if (attackPoint >= 4) {
            alert('Sizin limitiniz bitmiwdir');
            this.attackActive = false;
         }
      },
      heart() {
         let heartPoint = this.heartPoint++;

         if (heartPoint >= 0 && heartPoint <= 3) {
            let point2 = Math.round(Math.random() * 15);
            this.userHeal += point2;
            this.heartLimit--;

            console.log(point2);
         } else if (heartPoint >= 4) {
            alert('Sizin limitiniz bitmiwdir');
            this.heartActive = false;
         }
      },
      leave() {
         this.userHeal = 0;
      }
   },

   watch: {
      monsterHeal(value) {
         if (value <= 0) {
            this.monsterHeal = 0;
            this.hucumActive = false;
            this.terkEtActive = false;
            Swal.fire({
               title: 'Siz Uddunuz',
               text: "Yeni oyuna baslamaq isteyirsinizmi?",
               icon: 'success',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Beli, Yeni Oyun!',
               cancelButtonText: "Xeyr",
            }).then((result) => {
               if (result.isConfirmed) {
                  this.userHeal = 100;
                  this.monsterHeal = 100;
                  Swal.fire(
                     'Okey!',
                     'Yeni Oyun Basladi',
                     'success'
                  );
                  this.userPoint++;
                  this.divStatus = true;
                  this.hucumActive = true;
                  this.terkEtActive = true;
               } else {
                  this.hucumActive = true;
                  this.terkEtActive = true;
               }
            })
         }
      },
      userHeal(value) {
         if (value <= 0) {
            this.userHeal = 0;
            this.hucumActive = false;
            this.terkEtActive = false;
            Swal.fire({
               title: 'Siz Uduzdunuz',
               text: "Yeni oyuna baslamaq isteyirsinizmi?",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Beli, Yeni Oyun!',
               cancelButtonText: "Xeyr"
            }).then((result) => {
               if (result.isConfirmed) {
                  this.userHeal = 100;
                  this.monsterHeal = 100;
                  Swal.fire(
                     'Okey!',
                     'Yeni Oyun Basladi',
                     'success'
                  );
                  this.monsterPoint++;
                  this.divStatus = true;
                  this.hucumActive = true;
                  this.terkEtActive = true;
               } else {
                  this.hucumActive = true;
                  this.terkEtActive = true;
               }
            });

         } else if (value >= 100) {
            this.userHeal = 100;
         }
      }
   }
})