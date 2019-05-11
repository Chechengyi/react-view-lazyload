
/**
 * {
 *   type: [] // component queen
 * }
 */
let componentMap = {

}


function addMap(type, Component){
  if ( !componentMap[type] ) {
    componentMap[type] = []
  }
  componentMap[type].push(Component)
}

function triggerType(type){
  checkQueen(type)
}

function checkQueen(type){
  if ( !componentMap[type] || componentMap[type].length === 0 ) {
    return
  }
  let Component = componentMap[type][0]
  if ( Component.checkView() ) {
    componentMap[type].shift()
    checkQueen(type)
  }
}

function removeQueen(type){
  componentMap[type] = null
}



export {
  addMap,
  triggerType,
  removeQueen
}

