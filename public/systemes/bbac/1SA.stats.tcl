  source /Users/acocco/projets/ent2.yaka.fr/deal319/ent2/filtres/bbac.tcl
  source format/none
  set TOT 0
  set SEL 0
  main {
    incr TOT
    reject if {[bbac::1SA west] == 0}
    incr SEL
    accept
  }
  deal_finished {
    puts "{ \"totalDeals\": $TOT, \"selectedDeals\": $SEL, \"percent\": [expr {double(round($SEL * 1000 / $TOT)) / 10}] }"
  }
