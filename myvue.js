var pos = new Vue({
    el : '.snake-pos', 
    data: {
        xx: px,
        x : 10,
        yy: py, 
        y : 10,
    }, 
    watch: {
        xx :function(cur, old){
            var vm = this
            function animate(){
                if(TWEEN.update()){
                    requestAnimationFrame(animate)
                }
            }

            new TWEEN.tween({ tweenx : old})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({tweenx : cur}, 50)
                .onUpdate(function(){
                    vm.x = this.tweenx.toFixed(0)
                })
                .start()
            
            animate()
        }
    }

})