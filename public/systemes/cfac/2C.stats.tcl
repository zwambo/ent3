  source /Users/acocco/projets/ent2.yaka.fr/deal319/ent2/filtres/cfac.tcl
  source format/none
  set TOT 0
  set SEL 0
  main {
    incr TOT
    reject if {[cfac::2C west] == 0}
    incr SEL
    accept
  }
  deal_finished {
    puts "{ \"totalDeals\": $TOT, \"selectedDeals\": $SEL, \"percent\": [expr {double(round($SEL * 1000 / $TOT)) / 10}] }"
  }
