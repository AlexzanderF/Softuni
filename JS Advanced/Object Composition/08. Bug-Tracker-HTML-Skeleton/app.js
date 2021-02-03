function solve() {
    function main() {
        let currId = 0;
        return {
            report(author, description, reproducible, severity) {
                this.outputBox.innerHTML += `<div id="report_${currId}" class="report">
                <div class="body">
                <p>${description}</p>
                </div>
                <div class="title">
                <span class="author">Submitted by: ${author}</span>
                <span class="status">${'Open'} | ${severity}</span>
                </div>
                </div>
                `;
                currId++;
            },
            setStatus(id, newStatus) {
                let report = document.getElementById(`report_${id}`);
                let status = report.querySelector('.title .status');
                status.textContent = newStatus + ' | ' + status.textContent.split(' | ')[1];
            },
            remove(id) {
                let report = document.getElementById(`report_${id}`);
                report.remove();
            },
            sort(method) {
                let sortedReports = Array.from(this.outputBox.children);
                switch (method) {
                    case 'author':
                        sortedReports.sort((a, b) => {
                            return a.querySelector('.author').textContent.split(' ')[2].localeCompare(b.querySelector('.author').textContent.split(' ')[2]);
                        });
                        break;
                    case 'severity':
                        sortedReports.sort((a, b) => {
                            return a.querySelector('.status').textContent.split(' ')[2] - b.querySelector('.status').textContent.split(' ')[2];
                        });
                        break;
                    default:
                        sortedReports.sort((a, b) => {
                            return a.id[a.id.length - 1] - b.id[b.id.length - 1];
                        });
                }
                console.log(sortedReports);
                this.outputBox.innerHTML = '';
                sortedReports.forEach(rep => {
                    this.outputBox.appendChild(rep);
                });
            },
            output(selector) {
                this.outputBox = document.querySelector(selector);
            }
        };
    }
    let tracker = main();
    tracker.output('#content');
    tracker.report('guy', 'report content', true, 5);
    tracker.report('second guy', 'report content 2', true, 3);
    tracker.report('abv', 'report content three', true, 4);
    tracker.setStatus(0, 'Closed');
    tracker.sort('author');

}

solve();