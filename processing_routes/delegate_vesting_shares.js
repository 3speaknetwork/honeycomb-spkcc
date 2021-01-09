const { store } = require('./../index')

exports.delegate_vesting_shares = function(json, pc) { //grab posts to reward
    var ops = []
    const vests = parseInt(parseFloat(json.vesting_shares) * 1000000)
    if (json.delegatee == config.delegation && vests) {
        ops.push({ type: 'put', path: ['delegations', json.delegator], data: vests })
        ops.push({ type: 'put', path: ['feed', `${json.block_num}:${json.transaction_id}`], data: `@${json.delegator}| has delegated ${vests} vests to @${config.delegation}` })
    } else if (json.delegatee == config.delegation && !vests) {
        ops.push({ type: 'del', path: ['delegations', json.delegator] })
        ops.push({ type: 'put', path: ['feed', `${json.block_num}:${json.transaction_id}`], data: `@${json.delegator}| has removed delegation to @${config.delegation}` })
    }
    store.batch(ops, pc)
}