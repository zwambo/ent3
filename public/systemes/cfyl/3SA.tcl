  source /Users/acocco/Dropbox/deal319/allenamento-v2/filtres/_utils.tcl
  source /Users/acocco/Dropbox/deal319/allenamento-v2/filtres/cfyl.tcl
  source lib/parscore.tcl
  source format/pbn
  main {
    set res [cfyl::3SA west]
    reject if { $res == 0}

    incr SEL
    if {$res != 1} {
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
    set tricks    [lindex $par 3]
    puts "\[ZPAR \"$score à $contract par $declarer ($tricks levées)\"\]"

    accept
  }
  deal_finished {
  }
