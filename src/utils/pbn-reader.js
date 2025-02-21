// src/utils/pbn-reader.js

// parse decode les mains de la donne **data**
function parse (data) {
  const res = {}
  // position des mains
  let north = 0
  let east = 1
  let south = 2
  let west = 3

  res.firstPlayer = data.slice(7, 8)
  switch (res.firstPlayer) {
    case 'N':
      north = 0
      east = 1
      south = 2
      west = 3
      break
    case 'E':
      north = 3
      east = 0
      south = 1
      west = 2
      break
    case 'S':
      north = 2
      east = 3
      south = 0
      west = 1
      break
    case 'W':
      north = 1
      east = 2
      south = 3
      west = 0
      break
  }

  const hands = []
  const deal = data.slice(9, -2).split(' ')

  for (const item of deal) {
    const hand = item.split('.')
    hands.push({
      S: hand[0],
      H: hand[1],
      D: hand[2],
      C: hand[3]
    })
  }

  res.north = hands[north]
  res.south = hands[south]
  res.east = hands[east]
  res.west = hands[west]

  return res
}

function parseDeals (boards) {
  // les donnes sont separees par '\n\n'
  const boardsArray = boards.split('\n\n')

  const resArray = {
    deals: []
  }
  console.log("parsedDeals  boards: %O", boardsArray); // Débogage

  for (const board of boardsArray) {
    const boardRes = {
      comments: []
    }
    // inComment indique si on est dans le corps d'un commentaire ou pas
    let commentaire = null

    // on traite chaque board
    const lines = board.split('\n')
    for (const line of lines) {
      if (Array.isArray(commentaire)) {
        // il y a un commentaire en cours d'agregation
        if (line.startsWith('}')) {
          // nous avons atteint la fin du commentaire
          boardRes.comments.push(commentaire)
          // on reinitialise le commentaire
          commentaire = null
        } else {
          // ajouter la ligne courante au commentaire
          commentaire.push(line)
        }
      } else if (line.startsWith('{')) {
        // on entre dans un commentaire
        commentaire = []
        // nous avons le debut d'un commentaire
        // il faut lire toutes les lignes jusqua  trouver  "}"
      } else {
        // cas general : on traite les tags
        if (line.startsWith('[Deal "')) {
          const myDeal = parse(line)

          boardRes.north = myDeal.north
          boardRes.south = myDeal.south
          boardRes.east = myDeal.east
          boardRes.west = myDeal.west
        }
        if (line.startsWith('[Dealer "')) {
          boardRes.dealer = line.slice(9, -2)
        }
        if (line.startsWith('[Vulnerable "')) {
          boardRes.vulnerable = line.slice(13, -2)
        }
        if (line.startsWith('[ZPAR "')) {
          boardRes.par = line.slice(7, -2)
        }
        if (line.startsWith('[Board "')) {
          boardRes.boardNumber = line.slice(8, -2)
        }
        if (line.startsWith('[ZMESSAGE "')) {
          boardRes.message = line.slice(11, -2)
        }
      }
    }
    // on empile le resultat ... s'il y en a 1
    if (boardRes.north !== undefined) resArray.deals.push(boardRes)
    else if (boardRes.comments.length > 0) {
      // il y a des commentaires et ils ne sont pas affectes a une donne precise. ils concernent toute la serie
      resArray.comments = boardRes.comments
    }
    // sinon, on ne fait rien. (suppression de la derniere ligne vide)
  }

  return resArray
}

export default {
  parse,
  parseDeals
}
// ⦿‿⦿ - That's all, Folks! - ⦿‿⦿ //
