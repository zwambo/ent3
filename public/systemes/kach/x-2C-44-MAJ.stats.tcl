  source /Users/acocco/Dropbox/deal319/allenamento-v2/filtres/kach.tcl
  source format/none
  set TOT 0
  set SEL 0
  main {
    incr TOT
    reject if {[kach::x-2C-44-MAJ west] == 0}
    incr SEL
    accept
  }
  deal_finished {
    puts "{ \"totalDeals\": $TOT, \"selectedDeals\": $SEL, \"percent\": [expr {double(round($SEL * 1000 / $TOT)) / 10}] }"
  }
