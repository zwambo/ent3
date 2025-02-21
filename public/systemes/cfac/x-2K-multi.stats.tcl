  source /Users/acocco/Dropbox/deal319/allenamento-v2/filtres/cfac.tcl
  source format/none
  set TOT 0
  set SEL 0
  main {
    incr TOT
    reject if {[cfac::x-2K-multi west] == 0}
    incr SEL
    accept
  }
  deal_finished {
    puts "{ \"totalDeals\": $TOT, \"selectedDeals\": $SEL, \"percent\": [expr {double(round($SEL * 1000 / $TOT)) / 10}] }"
  }
