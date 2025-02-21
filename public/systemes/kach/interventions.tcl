  source /Users/acocco/Dropbox/deal319/allenamento-v2/filtres/_utils.tcl
  source /Users/acocco/Dropbox/deal319/allenamento-v2/filtres/kach.tcl
  source lib/parscore.tcl
  source format/pbn
  main {
    set res [kach::interventions west]
    reject if { $res == false}

    incr SEL
    if {$res != false} {
      puts "\[ZMESSAGE \"Nord ouvre $res\"\]"
      puts "\[Dealer \"North\"\]"
    } else {
      puts "\[Dealer \"[donneur $SEL]\"\]"
    }
    puts "\[Board \"$SEL\"\]"

    set vul [vulnerable $SEL]
    puts "\[Vulnerable \"$vul\"\]"

    set par [parscore east $vul]
    set contract [lindex $par 0]
    set declarer [lindex $par 1]
    set score    [lindex $par 2]
    if { $score < 0 } {
      puts "\[OptimumScore \"EW $score\"\]"
    } else {
      puts "\[OptimumScore \"NS $score\"\]"
    }

    accept
  }
  deal_finished {
  }
